import json
from jinja2 import Environment, FileSystemLoader

env = Environment(
    autoescape=False,
    loader=FileSystemLoader('./'),
    trim_blocks=False
)


def render_template(filename, context):
    return env.get_template(filename).render(context)

with open('./cv.json', 'r') as f:
    context = json.load(f)
    with open('../cv.html', 'w') as out:
        out.write(
            render_template('template.html', context)
        )
