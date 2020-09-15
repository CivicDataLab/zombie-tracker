# Connect to local/remote DB
server_flag <- 'r' # l (local) / r (remote)
if(server_flag == 'l'){
  con_string <- 'local_'
} else if (server_flag == 'r'){
  con_string <- ''
}

db <- Sys.getenv(glue("{con_string}db_name"))
host_db <- Sys.getenv(glue("{con_string}host_db"))
db_port <- Sys.getenv(glue("{con_string}db_port"))
db_user <- Sys.getenv(glue("{con_string}postgres_user"))
db_password <- Sys.getenv(glue("{con_string}postgres_pwd"))

con <-
  dbxConnect(adapter = "postgres",
             dbname = db,
             host = host_db,
             port = db_port,
             user = db_user,
             password = db_password
  )
