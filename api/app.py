from flask import Flask
from scenedetect import open_video, SceneManager, ContentDetector, save_images
from scenedetect.backends.opencv import VideoStreamCv2
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Hello, World!"

@app.route("/api/scene", methods=['GET'])
def scene_detect():

    video = open_video("./demo.mp4")
    scene_manager = SceneManager()
    scene_manager.add_detector(ContentDetector())
    # Detect all scenes in video from current position to end.
    scene_manager.detect_scenes(video)
    # `get_scene_list` returns a list of start/end timecode pairs
    # for each scene that was found.
    scenes = scene_manager.get_scene_list()
    print(scenes)

    # scene_list = []
    # scene_list = save_images(scenes, video, 1, 1, "jpg", 95,
    #                    image_name_template='$VIDEO_NAME-$SCENE_NUMBER', )
    
    return scenes


if __name__ == "__main__":
    app.run(port=5000)