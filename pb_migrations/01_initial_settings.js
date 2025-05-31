migrate((app) => {
    let settings = app.settings()

    // for all available settings fields you could check
    // /jsvm/interfaces/core.Settings.html
    settings.meta.appName = "test"
    settings.meta.appURL = "https://example.com"
    settings.logs.maxDays = 30
    settings.logs.logAuthId = true
    settings.logs.logIP = true

    app.save(settings)
})
