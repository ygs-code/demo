<
div
id = "qad-dialog-64" > < / div > < link
rel = "stylesheet"
type = "text/css"
href = "http://qad.client.io/css/snippet.css" > < / script > < script
type = "text/javascript"
src = "http://qad.client.io/src/snippet.js" > < / script > < script
type = "text/javascript" > document.getElementById("qad-dialog-64").appendChild(qad.renderDialog({
        "root": "d849d917-8a43-4d51-9e99-291799c144db",
        "nodes": [{
            "id": "d849d917-8a43-4d51-9e99-291799c144db",
            "type": "qad.Question",
            "question": "Does the thing work?",
            "options": [{"id": "yes", "text": "Yes"}, {"id": "no", "text": "No"}]
        }, {
            "id": "4073e883-1cc6-46a5-b22d-688ca1934324",
            "type": "qad.Answer",
            "answer": "Don't mess about with it."
        }, {
            "id": "8ce3f820-54f0-41f0-a46c-1e4f57b5f91e",
            "type": "qad.Question",
            "question": "Did you mess about with it?",
            "options": [{"id": "yes", "text": "Yes"}, {"id": "no", "text": "No"}]
        }, {
            "id": "7da45291-2535-4aa1-bb50-5cadd2b2fb91",
            "type": "qad.Answer",
            "answer": "Run away!"
        }, {
            "id": "fd3e0ab4-fd3a-4342-972b-3616e0c0a5cf",
            "type": "qad.Question",
            "question": "Will you get screwed?",
            "options": [{"id": "yes", "text": "Yes"}, {"id": "no", "text": "No"}]
        }, {
            "id": "13402455-006d-41e3-aacc-514f551b78b8",
            "type": "qad.Answer",
            "answer": "Poor boy."
        }, {"id": "857c9deb-86c3-47d8-bc6d-8f36c5294eab", "type": "qad.Answer", "answer": "Put it in a bin."}],
        "links": [{
            "id": "9d87214a-7b08-47ce-9aec-8e49ed7ae929",
            "type": "link",
            "source": {
                "id": "d849d917-8a43-4d51-9e99-291799c144db",
                "selector": "g:nth-child(1) g:nth-child(3) g:nth-child(1) g:nth-child(4) circle:nth-child(1)      ",
                "port": "yes"
            },
            "target": {"id": "4073e883-1cc6-46a5-b22d-688ca1934324"}
        }, {
            "id": "fd9f3367-79b9-4f69-b5b7-2bba012e53bb",
            "type": "link",
            "source": {
                "id": "8ce3f820-54f0-41f0-a46c-1e4f57b5f91e",
                "selector": "g:nth-child(1) g:nth-child(3) g:nth-child(1) g:nth-child(4) circle:nth-child(1)      ",
                "port": "yes"
            },
            "target": {"id": "7da45291-2535-4aa1-bb50-5cadd2b2fb91"}
        }, {
            "id": "641410b2-aeb5-42ad-b757-2d9c6e4d56bd",
            "type": "link",
            "source": {
                "id": "d849d917-8a43-4d51-9e99-291799c144db",
                "selector": "g:nth-child(1) g:nth-child(3) g:nth-child(2) g:nth-child(4) circle:nth-child(1)      ",
                "port": "no"
            },
            "target": {
                "id": "8ce3f820-54f0-41f0-a46c-1e4f57b5f91e",
                "selector": "g:nth-child(1) g:nth-child(4) g:nth-child(1) circle:nth-child(1)     ",
                "port": "in"
            }
        }, {
            "id": "3b9de57d-be21-4e9e-a73b-693b32e5f14a",
            "type": "link",
            "source": {
                "id": "8ce3f820-54f0-41f0-a46c-1e4f57b5f91e",
                "selector": "g:nth-child(1) g:nth-child(3) g:nth-child(2) g:nth-child(4) circle:nth-child(1)      ",
                "port": "no"
            },
            "target": {
                "id": "fd3e0ab4-fd3a-4342-972b-3616e0c0a5cf",
                "selector": "g:nth-child(1) g:nth-child(4) g:nth-child(1) circle:nth-child(1)     ",
                "port": "in"
            }
        }, {
            "id": "7e96039d-c3d4-4c86-b8e5-9a49835e114b",
            "type": "link",
            "source": {
                "id": "fd3e0ab4-fd3a-4342-972b-3616e0c0a5cf",
                "selector": "g:nth-child(1) g:nth-child(3) g:nth-child(1) g:nth-child(4) circle:nth-child(1)      ",
                "port": "yes"
            },
            "target": {"id": "13402455-006d-41e3-aacc-514f551b78b8"}
        }, {
            "id": "eecaae21-3e81-43f9-a5c1-6ea40c1adba8",
            "type": "link",
            "source": {
                "id": "fd3e0ab4-fd3a-4342-972b-3616e0c0a5cf",
                "selector": "g:nth-child(1) g:nth-child(3) g:nth-child(2) g:nth-child(4) circle:nth-child(1)      ",
                "port": "no"
            },
            "target": {"id": "857c9deb-86c3-47d8-bc6d-8f36c5294eab"}
        }]
    })) < / script >