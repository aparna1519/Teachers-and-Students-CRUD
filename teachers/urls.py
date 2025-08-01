from django.urls import path
from . import views

urlpatterns = [
    path('', views.teacher_list, name="all-teachers"), # Keep this as the root of /teachers/
    path('add-teacher/', views.add_teacher, name="add-teacher"),
    path('update-teacher/<str:id>', views.update_teacher, name="update-teacher"),
    path('delete-teacher/<str:id>', views.delete_teacher, name="delete-teacher"),
    path('delete-selected-teachers/', views.delete_selected_teachers, name="delete-selected-teachers"),
]
