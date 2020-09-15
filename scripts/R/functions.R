fetch_all_tables <- function(){
  all_tables <- dbxSelect(con,
                          "SELECT table_name FROM information_schema.tables
                 WHERE table_schema='public'") 
  return(all_tables)
}


show_all_columns <- function(table_name) {
  all_cols <- dbxSelect(
    con,
    glue(
      "SELECT column_name
FROM information_schema.columns
WHERE table_schema = 'public'
AND table_name = {quote(table_name)}
ORDER BY column_name ASC"
    )
  ) %>% unique()
  return(all_cols)
}