from django.core.files import File
from pathlib import Path
from PIL import Image
from io import BytesIO
import boto3

image_types = {
    "jpg": "JPEG",
    "jpeg": "JPEG",
    "png": "PNG",
    "gif": "GIF",
    "tif": "TIFF",
    "tiff": "TIFF",
}


def image_resize(image, width, height):
    # Open the image using Pillow
    img = Image.open(image)
    # check if either the width or height is greater than the max
    if img.width > width or img.height > height:
        output_size = (width, height)
        # Create a new resized “thumbnail” version of the image with Pillow
        img.thumbnail(output_size)
        # Find the file name of the image
        img_filename = Path(image.file.name).name
        # Spilt the filename on “.” to get the file extension only
        img_suffix = Path(image.file.name).name.split(".")[-1]
        # Use the file extension to determine the file type from the image_types dictionary
        img_format = image_types[img_suffix]
        # Save the resized image into the buffer, noting the correct file type
        buffer = BytesIO()
        img.save(buffer, format=img_format)
        # Wrap the buffer in File object
        file_object = File(buffer)
        # Save the new resized file as usual, which will save to S3 using django-storages
        image.save(img_filename, file_object)

"""
def delete_img():#file_path):
    AWS_ACCESS_KEY_ID = "AKIA6PO6FQSVJMLA7F6E"
    AWS_SECRET_ACCESS_KEY = "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"
    conn = boto3.resource(
        "s3",
            'us-east-1',
            aws_access_key_id=AWS_ACCESS_KEY_ID,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
            #is_secure=True,
            #calling_format = boto.s3.connection.OrdinaryCallingFormat(),
        )
    bucket = conn.Bucket("megadey")
    bucket.delete(Key='static/products/FB_IMG_1657790938181.jpg')
    #k = Key(bucket)
    #print(bucket)
    #k.key = file_path
    #bucket.delete_key(k)
    return True
"""
from botocore.exceptions import ClientError
# To get list of buckets present in AWS using S3 resource
def delete_img(file_path):
    prefix = file_path.split("/")[0] + '/'
    AWS_ACCESS_KEY_ID = "AKIA6PO6FQSVJMLA7F6E"
    AWS_SECRET_ACCESS_KEY = "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"
    session = boto3.session.Session()
    s3_resource = session.resource('s3',
            'us-east-1',
            aws_access_key_id=AWS_ACCESS_KEY_ID,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY,)
    try:
        keys = s3_resource.meta.client.list_objects(Bucket="megadey", Prefix=prefix)
        print("Got buckets using resource:", keys)
    except ClientError:
        print("Couldn't get buckets.")
        raise
    else:
        #o = keys['Contents'][0]['Key']
        s3_resource.meta.client.delete_object(Bucket="megadey", Key=file_path)
        return True
#a=get_buckets_resource('static/products/FB_IMG_1657790938181.jpg')
#print(a)
#a=delete_img#('products/67617782_2317384878474260_2899381655292608512_o_1.jpg')