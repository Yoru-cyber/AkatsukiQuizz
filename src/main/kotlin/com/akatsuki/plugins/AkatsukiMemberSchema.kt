package com.akatsuki.plugins
import com.mongodb.client.MongoClient
import kotlinx.serialization.Serializable
import org.litote.kmongo.getCollection

@Serializable
data class AkatsukiMember(val id: Int, val name: String, val alias: String, val status: String, val range: String, val description: String)
//dependency injection of mongo client
class AkatsukiService(client: MongoClient){

    private val database = client.getDatabase("akatsuki")
    private val collection = database.getCollection<AkatsukiMember>("members")


    fun getAllAkatsukiMembers(): List<AkatsukiMember>{
        return collection.find().toList()
    }

}