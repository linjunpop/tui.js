class @Tui

  # TODO: replace with production URL
  apiUrl = "http://api.tui.dev/"

  constructor: (@projectID, @projectSecretKey) ->

  getGroup: (groupName) =>
    resourcePath = "groups/#{groupName}"

    @sendRequest(resourcePath, 'GET')

  createDevice: (device) =>
    resourcePath = "devices"

    @sendRequest(resourcePath, 'POST', {"device": device})

  updateDevice: (deviceToken, device) =>
    resourcePath = "devices/#{deviceToken}"

    @sendRequest(resourcePath, 'PUT', {"device": device})

  deleteDevice: (deviceToken) =>
    resourcePath = "devices/#{deviceToken}"

    @sendRequest(resourcePath, 'DELETE')

  createMessage: (message) =>
    resourcePath = "messages"

    @sendRequest(resourcePath, 'POST', {"message": message})

  sendRequest: (resourcePath, type, data) ->
    client = new XMLHttpRequest()

    client.open(type, "#{apiUrl}/#{resourcePath}", false)

    client.setRequestHeader("Content-Type", "application/json")
    client.setRequestHeader("Accept", "application/vnd.tui+json;version=1")
    client.setRequestHeader("X-Project-ID", @projectID)
    client.setRequestHeader("X-Project-API-Secret-Key", @projectSecretKey)

    client.send(JSON.stringify(data))

    return client
