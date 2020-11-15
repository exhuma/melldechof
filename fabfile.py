import invoke


@invoke.task
def run(context):
    context.run("npm run serve", replace_env=False, pty=True)


@invoke.task
def develop(context):
    context.run("npm install", replace_env=False, pty=True)
