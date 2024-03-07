package com.akatsuki.plugins


import com.akatsuki.routers.akatsukiAll
import io.ktor.server.application.*
import io.ktor.server.plugins.autohead.*
import io.ktor.server.routing.*
import org.litote.kmongo.KMongo

fun Application.configureRouting() {

    val uri = System.getenv("MONGODB_URI")
    val client = KMongo.createClient(uri)

    install(AutoHeadResponse)
    routing {
        akatsukiAll(client)
    }
}
