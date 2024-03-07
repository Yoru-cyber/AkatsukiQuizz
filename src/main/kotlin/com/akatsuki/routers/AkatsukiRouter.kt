package com.akatsuki.routers

import com.akatsuki.plugins.AkatsukiService
import com.mongodb.client.MongoClient
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.akatsukiAll(client: MongoClient){
    get("Akatsuki"){
        val service = AkatsukiService(client)
        val members = service.getAll()

        call.respond(members)
    }
}