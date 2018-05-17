# function-app-local

### Run Azure function app in Mac (localhost) - Pre configured using Service Bus

To run in local environment:

* Run this command:

```semantic
    npm i -g azure-functions-core-tools@core --unsafe-perm true
```

* In Vscode, Install the 'Azure Functions' plugin.

* Put all the app settings in local.settings.json

* Install the Service Bus Queue Trigger Extension (To support service bus)

```semantic
    func extensions install --package Microsoft.Azure.WebJobs.ServiceBus --version 3.0.0-beta5
```

> About Service Bus Extension: https://docs.microsoft.com/en-us/azure/azure-functions/functions-bindings-service-bus#output---javascript-example

* Run the function app:

```semantic
    func host start
```

* Setup Javascript Debugging:

```semantic
    func host start --debug vscode
```

* For more information, please refer to this guide:

> https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local
