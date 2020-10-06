from django.contrib import admin

# Register your models here.
from .models import IffDbAct, IffDbCaseActs, IffDbCaseDetails, IffDbCaseHistory, IffDbIaFiling, IffDbOrder, IffDbProcess, IffDbTransfer
admin.site.register(IffDbAct)
admin.site.register(IffDbCaseActs)
admin.site.register(IffDbCaseDetails)
admin.site.register(IffDbCaseHistory)
admin.site.register(IffDbIaFiling)
admin.site.register(IffDbOrder)
admin.site.register(IffDbProcess)
admin.site.register(IffDbTransfer)
