from django.shortcuts import render
from . models import Register
from . forms import RegisterPolls
# Create your views here.


def index(request):
    context = {}
    template_name = 'index.html'
    # Queryset es como un select * from
    # person = Register.objects.all()
    # context = {
    #     "person": person
    # }
    if request.method == "POST":
        form = RegisterPolls(request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('email')
            age = form.cleaned_data.get('age')
            gender = form.cleaned_data.get('gender')
            favorite_social = form.cleaned_data.get('favorite_social')
            favorite_social = form.cleaned_data.get('favorite_social')
            time_day_facebook = form.cleaned_data.get('time_day_facebook')
            time_day_whatsapp = form.cleaned_data.get('time_day_whatsapp')
            time_day_twitter = form.cleaned_data.get('time_day_twitter')
            time_day_instagram = form.cleaned_data.get('time_day_instagram')
            time_day_tiktok = form.cleaned_data.get('time_day_tiktok')
            reg = Register.objects.create(
                email=email,
                age=age,
                gender=gender,
                favorite_social=favorite_social,
                time_day_facebook=time_day_facebook,
                time_day_whatsapp=time_day_whatsapp,
                time_day_twitter=time_day_twitter,
                time_day_instagram=time_day_instagram,
                time_day_tiktok=time_day_tiktok
            )
            reg.save()
    else:
        form = RegisterPolls()
    context['form'] = form

    return render(request, template_name, context)
