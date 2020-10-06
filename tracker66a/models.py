# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class IffDbAct(models.Model):
    name = models.CharField(max_length=256)
    section = models.CharField(max_length=256)
    is66a = models.BooleanField()
    isflagged = models.BooleanField()

    class Meta:
        managed = False
        db_table = 'iff_db_act'


class IffDbCaseActs(models.Model):
    cino = models.OneToOneField('IffDbCaseDetails', models.DO_NOTHING, db_column='cino', primary_key=True)
    act = models.ForeignKey(IffDbAct, models.DO_NOTHING, db_column='act')

    class Meta:
        managed = False
        db_table = 'iff_db_case_acts'
        unique_together = (('cino', 'act'),)


class IffDbCaseDetails(models.Model):
    cino = models.CharField(primary_key=True, max_length=16)
    archive = models.CharField(max_length=1, blank=True, null=True)
    case_no = models.CharField(max_length=15, blank=True, null=True)
    complex_code = models.CharField(max_length=5, blank=True, null=True)
    court_code = models.CharField(max_length=5, blank=True, null=True)
    court_name = models.CharField(max_length=256, blank=True, null=True)
    court_no = models.CharField(max_length=5, blank=True, null=True)
    est_code = models.CharField(max_length=6, blank=True, null=True)
    date_first_list = models.DateField(blank=True, null=True)
    date_last_list = models.DateField(blank=True, null=True)
    date_next_list = models.DateField(blank=True, null=True)
    date_of_decision = models.DateField(blank=True, null=True)
    date_of_filing = models.DateField(blank=True, null=True)
    dt_regis = models.DateField(blank=True, null=True)
    desgcode = models.CharField(max_length=5, blank=True, null=True)
    desgname = models.CharField(max_length=256, blank=True, null=True)
    disp_name = models.CharField(max_length=256, blank=True, null=True)
    disp_nature = models.CharField(max_length=5, blank=True, null=True)
    district_code = models.CharField(max_length=5, blank=True, null=True)
    district_name = models.CharField(max_length=50, blank=True, null=True)
    state_code = models.CharField(max_length=2, blank=True, null=True)
    state_name = models.CharField(max_length=50, blank=True, null=True)
    fil_no = models.CharField(max_length=20, blank=True, null=True)
    fil_year = models.CharField(max_length=4, blank=True, null=True)
    reg_no = models.CharField(max_length=20, blank=True, null=True)
    reg_year = models.CharField(max_length=4, blank=True, null=True)
    fir_no = models.CharField(max_length=20, blank=True, null=True)
    fir_year = models.CharField(max_length=4, blank=True, null=True)
    goshwara_no = models.CharField(max_length=5, blank=True, null=True)
    police_station = models.CharField(max_length=256, blank=True, null=True)
    jcode = models.CharField(max_length=20, blank=True, null=True)
    judcode = models.CharField(max_length=20, blank=True, null=True)
    judgment_date = models.DateField(blank=True, null=True)
    judgment_link = models.TextField(blank=True, null=True)
    judgment_path = models.CharField(max_length=256, blank=True, null=True)
    judgment_word_count = models.IntegerField(blank=True, null=True)
    judgment_language = models.CharField(max_length=2, blank=True, null=True)
    judgment_error = models.TextField(blank=True, null=True)
    ldesgname = models.CharField(max_length=256, blank=True, null=True)
    lower_court_code = models.CharField(max_length=5, blank=True, null=True)
    lower_court_dec_dt = models.DateField(blank=True, null=True)
    main_matter_case_no = models.CharField(max_length=15, blank=True, null=True)
    main_matter_cino = models.CharField(max_length=16, blank=True, null=True)
    main_matter_filing_no = models.CharField(max_length=50, blank=True, null=True)
    hide_pet_name = models.CharField(max_length=1, blank=True, null=True)
    pet_name_add = models.TextField(blank=True, null=True)
    pet_adv = models.CharField(max_length=256, blank=True, null=True)
    pet_legal_heir = models.CharField(max_length=1, blank=True, null=True)
    pet_name = models.CharField(max_length=256, blank=True, null=True)
    pet_status = models.IntegerField(blank=True, null=True)
    petparty_name = models.CharField(max_length=256, blank=True, null=True)
    hide_res_name = models.CharField(max_length=1, blank=True, null=True)
    res_name_add = models.TextField(blank=True, null=True)
    res_adv = models.CharField(max_length=256, blank=True, null=True)
    res_legal_heir = models.CharField(max_length=1, blank=True, null=True)
    res_name = models.CharField(max_length=256, blank=True, null=True)
    res_status = models.IntegerField(blank=True, null=True)
    resparty_name = models.CharField(max_length=256, blank=True, null=True)
    purpose_name = models.CharField(max_length=256, blank=True, null=True)
    purpose_next = models.CharField(max_length=10, blank=True, null=True)
    str_error = models.TextField(blank=True, null=True)
    str_error1 = models.TextField(blank=True, null=True)
    submatter_case_no = models.CharField(max_length=50, blank=True, null=True)
    subordinate_court_no = models.CharField(max_length=5, blank=True, null=True)
    subordinate_court_name = models.CharField(max_length=256, blank=True, null=True)
    subordinate_court_case_type = models.CharField(max_length=256, blank=True, null=True)
    subordinate_court_case_no = models.CharField(max_length=15, blank=True, null=True)
    subordinate_court_year = models.CharField(max_length=4, blank=True, null=True)
    subordinate_court_decision_date = models.DateField(blank=True, null=True)
    transfer_est_flag = models.CharField(max_length=1, blank=True, null=True)
    type_name = models.CharField(max_length=256, blank=True, null=True)
    is66a = models.BooleanField()
    comments = models.CharField(max_length=256, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'iff_db_case_details'


class IffDbCaseHistory(models.Model):
    cino = models.ForeignKey(IffDbCaseDetails, models.DO_NOTHING, db_column='cino', blank=True, null=True)
    judge = models.CharField(max_length=256, blank=True, null=True)
    business_on_date = models.DateField(blank=True, null=True)
    hearing_date = models.DateField(blank=True, null=True)
    disposal_date = models.DateField(blank=True, null=True)
    next_hearing_date = models.DateField(blank=True, null=True)
    purpose = models.CharField(max_length=256, blank=True, null=True)
    next_purpose = models.CharField(max_length=256, blank=True, null=True)
    business = models.TextField(blank=True, null=True)
    nature_of_disposal = models.CharField(max_length=256, blank=True, null=True)
    reason_for_adjournment = models.TextField(blank=True, null=True)
    exhibits = models.TextField(blank=True, null=True)
    presentee = models.TextField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'iff_db_case_history'


class IffDbIaFiling(models.Model):
    cino = models.ForeignKey(IffDbCaseDetails, models.DO_NOTHING, db_column='cino', blank=True, null=True)
    ia_number = models.CharField(max_length=20, blank=True, null=True)
    party = models.TextField(blank=True, null=True)
    date_of_filing = models.DateField(blank=True, null=True)
    next_date = models.DateField(blank=True, null=True)
    ia_status = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'iff_db_ia_filing'


class IffDbOrder(models.Model):
    cino = models.ForeignKey(IffDbCaseDetails, models.DO_NOTHING, db_column='cino', blank=True, null=True)
    number = models.IntegerField(blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    link = models.CharField(max_length=256, blank=True, null=True)
    path = models.CharField(max_length=256, blank=True, null=True)
    word_count = models.IntegerField(blank=True, null=True)
    language = models.CharField(max_length=2, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'iff_db_order'


class IffDbProcess(models.Model):
    cino = models.ForeignKey(IffDbCaseDetails, models.DO_NOTHING, db_column='cino', blank=True, null=True)
    process_id = models.CharField(max_length=25, blank=True, null=True)
    process_date = models.DateField(blank=True, null=True)
    process_title = models.CharField(max_length=256, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'iff_db_process'


class IffDbTransfer(models.Model):
    cino = models.ForeignKey(IffDbCaseDetails, models.DO_NOTHING, db_column='cino', blank=True, null=True)
    date = models.DateField(blank=True, null=True)
    from_court_no = models.CharField(max_length=5, blank=True, null=True)
    from_judge = models.CharField(max_length=256, blank=True, null=True)
    to_court_no = models.CharField(max_length=5, blank=True, null=True)
    to_judge = models.CharField(max_length=256, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'iff_db_transfer'



