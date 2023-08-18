from django.core.management.base import BaseCommand
from helm_app_backend.models import People  # Import your Person model

class Command(BaseCommand):
    help = 'Seeds the database with test data'

    def handle(self, *args, **options):
        # Seed the database with test data
        People.objects.create(name='Luka', age=24, email='luka@example.com')
        People.objects.create(name='Jane', age=28, email='jane@example.com')

        self.stdout.write(self.style.SUCCESS('Database seeded with test data'))