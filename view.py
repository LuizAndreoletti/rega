from .models import pessoa, planta

def index(request):
    people = Pessoa.objects.all()
    context = {
        'people': people,
    }
    return render(request, 'rega/index.html', context)

def Planta(request, id_pessoa):
    pessoa = get_object_or_404(pessoa, pk=id_pessoa)
    Planta = Planta.objects.filter(pessoa=pessoa)
    context = {
        'pessoa': pessoa,
        'planta': planta,
    }
    return render(request, 'rega/cadastro.html', context)
