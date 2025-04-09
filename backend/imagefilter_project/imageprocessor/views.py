import os
from django.http import JsonResponse, FileResponse
from django.views.decorators.csrf import csrf_exempt
from PIL import Image, ImageFilter, ImageOps
import io, base64

processed_image_path = None

@csrf_exempt
@csrf_exempt
def process_image(request):
    global processed_image_path
    if request.method == 'POST':
        image_file = request.FILES.get('image')
        filter_type = request.POST.get('filter')

        if not image_file or not filter_type:
            return JsonResponse({'error': 'Invalid data'}, status=400)

        image = Image.open(image_file)

        # Apply filters
        if filter_type == 'gray':
            image = ImageOps.grayscale(image)
        elif filter_type == 'sepia':
            sepia = ImageOps.colorize(ImageOps.grayscale(image), '#704214', '#C0A080')
            image = sepia
        elif filter_type == 'poster':
            image = image.convert("RGB").quantize(colors=8)
        elif filter_type == 'blur':
            image = image.filter(ImageFilter.BLUR)
        elif filter_type == 'edge':
            image = image.filter(ImageFilter.FIND_EDGES)
        elif filter_type == 'solar':
            image = ImageOps.solarize(image, threshold=128)

        # Save processed image
        processed_image_path = os.path.join('media', 'processed_image.png')
        image.save(processed_image_path)

        return JsonResponse({'message': 'Image processed successfully'})

    return JsonResponse({'error': 'Invalid request method'}, status=405)

def get_processed_image(request):
    global processed_image_path
    if processed_image_path and os.path.exists(processed_image_path):
        return FileResponse(open(processed_image_path, 'rb'), content_type='image/png')
    return JsonResponse({'error': 'No processed image available'}, status=404)