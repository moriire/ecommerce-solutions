from django.core.files import File
from pathlib import Path
from PIL import Image
from io import BytesIO

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


def delete_img(file_path):
    AWS_ACCESS_KEY_ID = '<access_key>'
    AWS_SECRET_ACCESS_KEY = '<secret_access_key>'
    Bucketname = 'ecsolutions'
    conn = boto.s3.connect_to_region(
            'us-east-1',
            aws_access_key_id=AWS_ACCESS_KEY_ID,
            aws_secret_access_key=AWS_SECRET_ACCESS_KEY,
            is_secure=True,
            calling_format = boto.s3.connection.OrdinaryCallingFormat(),
        )
    bucket = conn.get_bucket(Bucketname)
    k = Key(bucket)
    k.key = file_path
    bucket.delete_key(k)

