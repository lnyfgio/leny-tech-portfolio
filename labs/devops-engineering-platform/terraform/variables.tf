
variable "app_name" {
  description = "Name of the DevOps application"
  type        = string
  default     = "devops-platform"
}

variable "app_version" {
  description = "Docker image version"
  type        = string
  default     = "1.0"
}

variable "host_port" {
  description = "Port exposed on the host machine"
  type        = number
  default     = 3002
}

variable "container_port" {
  description = "Port exposed inside the container"
  type        = number
  default     = 3000
}
