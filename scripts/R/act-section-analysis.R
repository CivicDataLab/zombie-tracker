library(dplyr,warn.conflicts = FALSE)
library(jsonlite)
library(readr)
library(glue)

extract_act_and_section <- function(act_json){
  act_list <- jsonlite::fromJSON(act_json)
  act_id <- names(act_list)
  act_df <- data.frame("act_id"=c(),"section_id"=c(),stringsAsFactors = FALSE)
  for(i in 1:length(act_id)){
    section_id <- act_list[[act_id[[i]]]] %>% unlist()
    act_df <- dplyr::bind_rows(act_df, data.frame("act_id"=act_id[i],"section_id"=section_id))
  }
  return(act_df)
}

jh_data <-
  read_csv(
    "exp/repos/stop-66A/data/jharkhand_data_report_IT_act.csv",
    col_types = cols(
      date_of_filing = col_date(format = "%Y-%m-%d"),
      date_of_registration = col_date(format = "%Y-%m-%d")
    )
  )

jh_data$act_json <- stringr::str_replace_all(jh_data$Acts, pattern = "'", replacement = '"')

act_master <- data.frame('act_id'=c(), 'section_id'=c(), 'cnr'=c())
for(i in 1:nrow(jh_data)){
  act_row <- extract_act_and_section(jh_data$act_json[[i]])
  act_row$cnr <- jh_data$CNR[[i]]
  act_master <- dplyr::bind_rows(act_master, act_row)
  print(glue("{i} -- {jh_data$CNR[[i]]}"))
}

write_csv(act_master, "~/exp/repos/stop-66A/data/jh_act_section_cnr.csv")

# act_json <- jh_data$act_json[sample(nrow(jh_data),1)]
# x <- extract_act_and_section(act_json)
# listviewer::jsonedit(x)