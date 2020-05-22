source("scripts/R/libraries.R")

jh_act_section <- read_csv("data/jh_act_section_cnr.csv")

patterns_66 <- jh_act_section[grepl(jh_act_section$section_id,pattern = "66"),]
patterns_66a <- patterns_66$section_id[grepl(pattern = 'a', ignore.case = TRUE, x = patterns_66$section_id)] %>% unique()
not_66a_patterns <-
  c(
    "366A",
    "366(A)",
    "669(a)(c)(d)",
    "66(C)and66(D)",
    "66 and 66(C)",
    "66ITAct",
    "66E(a)",
    "66(E)ITAct",
    "66(B)(C)(D) and 84 (C)",
    "66(c)and67",
    "66(c)(d) it act",
    "66(c)(d)itact"
  )
patterns_66a <- setdiff(patterns_66a,not_66a_patterns)

jh_act_section$flag_66a <- 0
jh_act_section$flag_66a[jh_act_section$section_id %in% patterns_66a]   <- 1

write_csv(jh_act_section, "data/jh_acts_66a.csv")

# Joining with the master data of cases to get info for only 66A cases
jh_data <-
  read_csv(
    "data/jharkhand_data_report_IT_act.csv",
    col_types = cols(
      date_of_filing = col_date(format = "%Y-%m-%d"),
      date_of_registration = col_date(format = "%Y-%m-%d")
    )
  )

jh_data$Acts <- NULL

jh_66a_data <- jh_data[jh_data$CNR %in% unique(jh_act_section$cnr[jh_act_section$flag_66a == 1]),]
write_csv(jh_66a_data, "data/jh_cases_66a.csv")

# Get other acts which are present in 66A cases

cnr_66a <- jh_66a_data$CNR
other_acts <- jh_act_section[jh_act_section$cnr %in% cnr_66a,]
other_acts$act_id_updated <- other_acts$act_id %>% stringr::str_to_title() %>% stringr::str_squish()
act_names <-
  data.frame(
    'old_name' = c(
      "Ipc",
      "I.p.c",
      "Information Technology",
      "Posco",
      "Pocso",
      "Protection Of Children From Sexual Offences Act",
      "Protection Of Children From Sexual Offences Rules",
      "Prevention Of Child From Sexual Offence",
      "Immoral Traffic Act",
      "Information Technology Act 2000",
      "Scheduled Castes And Scheduled Tribes Orders (Amendment) Act",
      "Code Of Criminal Procedure"
    )
    ,
    'new_name' = c(
      "Indian Penal Code",
      "Indian Penal Code",
      "Information Technology Act",
      "POCSO",
      "POCSO",
      "POCSO",
      "POCSO",
      "POCSO",
      "Immoral Traffic (Prevention) Act",
      "Information Technology Act",
      "Scheduled Castes And The Scheduled Tribes (Prevention Of Atrocities) Act",
      "Cr. P. C."
    ),stringsAsFactors = FALSE
  )

other_acts <- left_join(other_acts,act_names, by=c('act_id_updated'='old_name'))
other_acts$act_id_updated[!is.na(other_acts$new_name)]  <- other_acts$new_name[!is.na(other_acts$new_name)]
other_acts$new_name <- NULL
other_acts$act_section <- paste0(other_acts$act_id_updated,' ',other_acts$section_id)

write_csv(other_acts, "data/jh_acts_with_66a.csv")
