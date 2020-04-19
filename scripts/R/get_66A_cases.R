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
