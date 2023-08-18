from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

class Command(BaseCommand):
    help = 'Creates a superuser for container startup'

    def handle(self, *args, **options):
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser('luka', 'admin@example.com', 'password')
            self.stdout.write(self.style.SUCCESS('Superuser created for container startup'))