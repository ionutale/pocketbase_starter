migrate((app) => {
    let superusers = app.findCollectionByNameOrId("_superusers")

    let record = new Record(superusers)

    // note: the values can be eventually loaded via $os.getenv(key)
    // or from a special local config file
    record.set("email", "{{superuser.email}}")
    record.set("password", "{{superuser.password}}")

    app.save(record)


    let user = app.findCollectionByNameOrId("users")
    
    let newUser = new Record(user)
    newUser.set("email", "{{user.email}}")
    newUser.set("password", "{{user.password}}")
    newUser.set("name", "{{user.name}}")
    newUser.set("verified", true)
    newUser.set("superuser", false)
    newUser.set("emailVisibility", "public")
    newUser.set("role", "editor")

    app.save(newUser)

}, (app) => { // optional revert operation
    try {
        // let record = app.findAuthRecordByEmail("_superusers", "utale.ion@gmail.com");
        // app.delete(record)
    } catch {
        // silent errors (probably already deleted)
    }
})