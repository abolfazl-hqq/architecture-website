from rest_framework import viewsets
from .models import Project, Category, SiteSetting
from .serializers import ProjectSerializer, CategorySerializer, SiteSettingSerializer

class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all().order_by('-created_at')
    serializer_class = ProjectSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

class SiteSettingViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = SiteSetting.objects.all()
    serializer_class = SiteSettingSerializer