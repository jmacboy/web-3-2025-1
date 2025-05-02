from django.contrib.auth.models import User
from rest_framework import serializers, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'email', 'first_name', 'last_name')


class UserViewSet(viewsets.ViewSet):

    @action(detail=False, methods=['get'], url_path='me')
    def me(self, request):
        user = request.user
        serializer = UserSerializer(user)
        return Response(serializer.data)

class AuthViewSet(viewsets.ViewSet):

    @action(methods=['post'], detail=False, url_path='register')
    def register(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        if not password or not email:
            return Response({'error': 'El email y la contraseña son requeridos'}, status=400)
        if User.objects.filter(email=email).exists():
            return Response({'error': 'El email ya está en uso'}, status=400)
        user = User.objects.create_user(email, email, password)
        return Response({'id': user.id, 'email': user.email}, status=201)
