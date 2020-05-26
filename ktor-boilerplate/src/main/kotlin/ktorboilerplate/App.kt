package ktorboilerplate

import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*

const val welcomeMessage = "It's working";

fun main(_args: Array<String>) {
    val server = embeddedServer(Netty, port = 8080) {
        routing {
            get("/") {
                call.respondText("It's working!", ContentType.Text.Plain)
            }
            get("/ping") {
                call.respondText("pong")
            }
        }
    }
    server.start(wait = true)
}
