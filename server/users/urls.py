from django.conf.urls import url
from users import views

urlpatterns = [
    url(
        r'^login/$',
        views.UserLoginView.as_view(),
        name='login'
    ),
    url(
        r'^register$',
        views.UserRegistrationView.as_view(),
        name='register'
    ),
    url(
        r'^change-password/$',
        views.UserChangePasswordView.as_view(),
        name='change-password'
    ),
]
