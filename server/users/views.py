from django.contrib.auth.models import User
from django.contrib.auth.hashers import check_password

from rest_framework import generics, status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from users.serializers import UserSerializer


class UserLoginView(APIView):
    """When login for the first time, a token for the user will be
    created and stored."""

    serializer_class = AuthTokenSerializer
    permission_classes = (AllowAny,)

    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({'username': user.username, 'token': token.key})


class UserRegistrationView(generics.CreateAPIView):

    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class UserChangePasswordView(APIView):
    """Allow users to change their password with token auth."""

    def post(self, request):
        user = request.user
        try:
            old_password = request.data['old_password']
            new_password = request.data['new_password']
        except KeyError:
            return Response({'error': "表单格式错误"},
                            status=status.HTTP_400_BAD_REQUEST)

        if check_password(old_password, user.password):
            user.set_password(new_password)
            user.save()
            return Response({'changed': True})
        else:
            return Response({'error': "旧密码错误"},
                            status=status.HTTP_403_FORBIDDEN)
