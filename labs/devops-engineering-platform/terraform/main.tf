
resource "docker_image" "app" {
  name = "${var.app_name}:${var.app_version}"

  build {
    context = "../"
    tag     = ["${var.app_name}:${var.app_version}"]
  }
}

resource "docker_network" "app_network" {
  name = "${var.app_name}-network"
}

resource "docker_container" "app" {
  name  = "${var.app_name}-app"
  image = docker_image.app.image_id

  restart = "unless-stopped"

  ports {
    internal = var.container_port
    external = var.host_port
  }

  networks_advanced {
    name = docker_network.app_network.name
  }

  env = [
    "NODE_ENV=production",
    "PORT=${var.container_port}"
  ]
}
