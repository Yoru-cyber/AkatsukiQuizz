package com.akatsuki.plugins

import io.ktor.server.application.*
import io.ktor.server.plugins.autohead.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Application.configureRouting() {
    var obito = AkatsukiMember(1, "Obito", "Tobi", "Deceased", "Chunin",
            "Obito Uchiha's personality takes a dramatic turn throughout the Naruto series. " +
                    "Initially, he is a kind and idealistic young man, driven by the dream of becoming Hokage and cherishing his friendships, especially with Kakashi. " +
                    "Loyalty and selflessness define him, evident in his willingness to sacrifice himself for his comrade. " +
                    "However, his perceived demise and subsequent manipulation by Madara drastically alter his character. " +
                    "Consumed by a desire to create a world free of pain, he adopts the alias Tobi and embraces deceit and manipulation. " +
                    "Vengeful and obsessive, he resorts to extreme methods, his good intentions twisted by his suffering. " +
                    "Yet, when confronted by Naruto's unwavering belief, a flicker of his former self reignites. " +
                    "Grappling with regret, Obito ultimately chooses self-sacrifice, seeking redemption for the darkness he embraced. " +
                    "As such, Obito's journey is a complex exploration of good intentions succumbing to manipulation and the potential for even the most lost soul to find redemption.")
    install(AutoHeadResponse)
    routing {
        get("/") {
            call.respondText("Hello World!")
        }
        get("/Akatsuki"){
            call.respond(obito)
        }
    }
}
