package com.akatsuki.plugins
import kotlinx.serialization.Serializable
import org.jetbrains.exposed.sql.*
import org.jetbrains.exposed.sql.transactions.transaction

@Serializable
data class AkatsukiMember(val id: Int, val name: String, val alias: String, val status: String, val range: String, val description: String)
class AkatsukiService(private val database: Database){
    object Members : Table() {
        val id = integer("id").autoIncrement()
        val name = varchar("name", length = 20)
        val alias = varchar("alias", length = 20)
        val status = varchar("status", length = 20)
        val range = varchar("range", length = 20)
        val description = varchar("description", length = 100)

        override val primaryKey = PrimaryKey(id)
    }
    init {
        transaction(database) {
            SchemaUtils.create(AkatsukiService.Members)
        }
    }

}