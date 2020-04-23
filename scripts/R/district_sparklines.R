library(dplyr,warn.conflicts = FALSE)
library(readr)
library(glue)
library(tidyr)

jh_cases_66a <- read_csv(
  "data/jh_cases_66a.csv",
  col_types = cols(
    CNR = col_character(),
    `Case Type` = col_character(),
    District = col_character(),
    Status = col_character(),
    date_of_filing = col_date(format = "%Y-%m-%d"),
    date_of_registration = col_date(format = "%Y-%m-%d")
  )
)

jh_cases_66a$year <- lubridate::year(jh_cases_66a$date_of_registration)

jh_cases_66a %>% 
  group_by(District, year) %>% 
  summarise(`Total cases` = length(year)) %>% 
  pivot_wider(
  names_from = "year",
  names_prefix = "year_",
  values_from = "Total cases",
  values_fill = list(`Total cases` = 0)
) %>% select(District,paste0("year_",seq(2012,2020))) %>% clipr::write_clip()

# Sheet - https://docs.google.com/spreadsheets/d/1MvnHkqcdLEVi_WAqXEJ9kRUVF22OnpIazUZ3tdhVLJI/edit#gid=1795089205