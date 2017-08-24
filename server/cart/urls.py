from django.conf.urls import url

from cart import views

urlpatterns = [
    url(
        r'^items/$',
        views.ItemListView.as_view(),
        name='item-list'
    ),
    url(
        r'^items/(?P<pk>\d+)/$',
        views.ItemDetailView.as_view(),
        name='item-detail'
    ),
]
