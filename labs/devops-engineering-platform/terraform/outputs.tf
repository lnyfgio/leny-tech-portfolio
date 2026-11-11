
output "application_url" {
  description = "URL of the running application"
  value       = "http://localhost:${var.host_port}"
}

output "docker_container_name" {
  description = "Name of the application container"
  value       = docker_container.app.name
}

output "docker_image_name" {
  description = "Name of the application image"
  value       = docker_image.app.name
}

output "docker_network_name" {
  description = "Name of the application network"
  value       = docker_network.app_network.name
}
