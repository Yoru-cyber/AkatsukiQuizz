package com.akatsuki.plugins


import com.akatsuki.routers.akatsukiAll
import io.ktor.server.application.*
import io.ktor.server.plugins.autohead.*
import io.ktor.server.routing.*
import org.litote.kmongo.KMongo

fun Application.configureRouting() {
    val client = KMongo.createClient("mongodb+srv://carlos:b5wqOPr2aKKA85yj@testcluster.q8rbtz5.mongodb.net/?retryWrites=true&w=majority&appName=TestCluster")

    install(AutoHeadResponse)
//    routing {
//        get("/") {
//            call.respondText("Hello World!")
//        }
//        get("/Akatsuki"){
//            val service = AkatsukiService(client)
//            val members = service.GetAll() //service failing
//
//            call.respond(members)
//        }
//    }
    routing {
        akatsukiAll(client)
    }
}
