from django.shortcuts import render, redirect, get_object_or_404
from .models import Teachers_model

def teacher_list(request):
    teachers = Teachers_model.objects.all()
    return render(request, "index.html", {"allTeachers": teachers})

def add_teacher(request):
    if request.method == "POST":
        name = request.POST.get("name")
        subject = request.POST.get("subject")
        email = request.POST.get("email")
        phone = request.POST.get("phone")
        image = request.FILES.get("image")

        teacher = Teachers_model (
            name = name,
            subject = subject,
            email = email,
            phone = phone,
            image = image if image else None
        )
        teacher.save()
        return redirect("all-teachers")
    return render(request, "index.html")

def update_teacher(request, id):
    teacher = get_object_or_404(Teachers_model, id=id)
    if request.method == "POST":
        teacher.name = request.POST.get("name")
        teacher.subject = request.POST.get("subject")
        teacher.email = request.POST.get("email")
        teacher.phone = request.POST.get("phone")
        image = request.FILES.get("image")
        if image:
            teacher.image = image
        teacher.save()
        return redirect("all-teachers")
    return render(request, "index.html", {"teacher": teacher})

def delete_teacher(request, id):
    teacher = Teachers_model.objects.filter(id=id)
    teacher.delete()

    return redirect("all-teachers")

def delete_selected_teachers(request):
    if request.method == "POST":
        teacher_ids = request.POST.getlist('teacher_ids')
        if teacher_ids:
            Teachers_model.objects.filter(id__in=teacher_ids).delete()
        return redirect("all-teachers")
    return redirect("all-teachers")
