package com.akatsuki.routers

import com.akatsuki.plugins.AkatsukiMember
import com.akatsuki.plugins.AkatsukiService
import com.mongodb.client.MongoClient
import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*

fun Route.akatsukiAll(client: MongoClient){
    get("Akatsuki"){
        val akatsukiMembers: List<AkatsukiMember>
        try {
            val service = AkatsukiService(client)
            akatsukiMembers = service.getAll()
            call.respond(status = HttpStatusCode.OK, akatsukiMembers)
        }
        catch (error: Throwable){
            application.log.error("Error on getting members", error)
            call.respond(status = HttpStatusCode.InternalServerError, "An internal error happened")
        }
        


    }
}