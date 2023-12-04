variable "aiven_project" {
  type    = string
  default = "felixwu-demo"
}

variable "cloud_name" {
  type    = string
  default = "google-us-west1"
}

variable "kafka_plan" {
  type    = string
  default = "startup-2"
}

variable "flink_plan" {
  type    = string
  default = "business-4"
}

variable "opensearch_plan" {
  type    = string
  default = "startup-4"
}

variable "postgres_plan" {
  type    = string
  default = "startup-4"
}
