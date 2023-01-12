# Image processing API

this API provides an endpoint that control the size of an image by pathing the image name, the width and the height of that image through string
e.g., /api/image?imgName=got.jpg&width=100,height=100

I used sharp module to process the images.

the processed image is saved in another folder for cashing, not to repeat the same process again.

I used MVC structure to organize my project.

I used a middleware "resize.ts" to process the image then send it through a controller "img_controller.ts".

## Error handling

if the imgName is not provided, error message "imgName is required" emmits.

if the image not exists, error message "that image does not exist" emmits.

## Linting and formatting

I used eslint for linting and prettier for formatting.

## Unit testing

I used jasmine for my test.

# second submit

I refactored the project and made additional middlewares to:

    - check the existane of the requied paramters in the query string

    - check the existance of either the processed image or the raw image

I separated the proseccing functionality in a separate module to be able to berform unit testing as mentioned in the review.
