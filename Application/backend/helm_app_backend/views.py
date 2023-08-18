from .models import People
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render
import json

@csrf_exempt
def create_person(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data['name']
            age = data['age']
            email = data['email']

            person = People(name=name, age=age, email=email)
            person.save()

            response_data = {'message': 'Person created successfully'}
            return JsonResponse(response_data, status=201)
        except Exception as e:
            error_data = {'error': str(e)}
            return JsonResponse(error_data, status=400)
    else:
        return JsonResponse({'error': 'Invalid request method'}, status=405)


def get_person(request, uuid):
    try:
        person = People.objects.get(uuid=uuid)
        data = {
            'name': person.name,
            'age': person.age,
            'email': person.email,
            'uuid': str(person.uuid),  # Convert UUID to string for JSON serialization
        }
        return JsonResponse(data, status=200)
    except People.DoesNotExist:
        error_data = {'error': 'Person not found'}
        return JsonResponse(error_data, status=404)

def home_view(request, *args, **kwargs):
    return render(request, "home.html", {})