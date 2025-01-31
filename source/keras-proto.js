
import * as protobuf from './protobuf.js';

const $root = protobuf.get('tf');

$root.third_party = {};

$root.third_party.tensorflow = {};

$root.third_party.tensorflow.python = {};

$root.third_party.tensorflow.python.keras = {};

$root.third_party.tensorflow.python.keras.protobuf = {};

$root.third_party.tensorflow.python.keras.protobuf.SavedMetadata = class SavedMetadata {

    constructor() {
        this.nodes = [];
    }

    static decode(reader, length) {
        const message = new $root.third_party.tensorflow.python.keras.protobuf.SavedMetadata();
        const end = length !== undefined ? reader.position + length : reader.length;
        while (reader.position < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nodes.push($root.third_party.tensorflow.python.keras.protobuf.SavedObject.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }

    static decodeText(reader) {
        const message = new $root.third_party.tensorflow.python.keras.protobuf.SavedMetadata();
        reader.start();
        while (!reader.end()) {
            const tag = reader.tag();
            switch (tag) {
                case "nodes":
                    message.nodes.push($root.third_party.tensorflow.python.keras.protobuf.SavedObject.decodeText(reader));
                    break;
                default:
                    reader.field(tag, message);
                    break;
            }
        }
        return message;
    }
};

$root.third_party.tensorflow.python.keras.protobuf.SavedObject = class SavedObject {

    constructor() {
    }

    static decode(reader, length) {
        const message = new $root.third_party.tensorflow.python.keras.protobuf.SavedObject();
        const end = length !== undefined ? reader.position + length : reader.length;
        while (reader.position < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 2:
                    message.node_id = reader.int32();
                    break;
                case 3:
                    message.node_path = reader.string();
                    break;
                case 4:
                    message.identifier = reader.string();
                    break;
                case 5:
                    message.metadata = reader.string();
                    break;
                case 6:
                    message.version = $root.third_party.tensorflow.python.keras.protobuf.VersionDef.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }

    static decodeText(reader) {
        const message = new $root.third_party.tensorflow.python.keras.protobuf.SavedObject();
        reader.start();
        while (!reader.end()) {
            const tag = reader.tag();
            switch (tag) {
                case "node_id":
                    message.node_id = reader.int32();
                    break;
                case "node_path":
                    message.node_path = reader.string();
                    break;
                case "identifier":
                    message.identifier = reader.string();
                    break;
                case "metadata":
                    message.metadata = reader.string();
                    break;
                case "version":
                    message.version = $root.third_party.tensorflow.python.keras.protobuf.VersionDef.decodeText(reader);
                    break;
                default:
                    reader.field(tag, message);
                    break;
            }
        }
        return message;
    }
};

$root.third_party.tensorflow.python.keras.protobuf.SavedObject.prototype.node_id = 0;
$root.third_party.tensorflow.python.keras.protobuf.SavedObject.prototype.node_path = "";
$root.third_party.tensorflow.python.keras.protobuf.SavedObject.prototype.identifier = "";
$root.third_party.tensorflow.python.keras.protobuf.SavedObject.prototype.metadata = "";
$root.third_party.tensorflow.python.keras.protobuf.SavedObject.prototype.version = null;

$root.third_party.tensorflow.python.keras.protobuf.VersionDef = class VersionDef {

    constructor() {
        this.bad_consumers = [];
    }

    static decode(reader, length) {
        const message = new $root.third_party.tensorflow.python.keras.protobuf.VersionDef();
        const end = length !== undefined ? reader.position + length : reader.length;
        while (reader.position < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.producer = reader.int32();
                    break;
                case 2:
                    message.min_consumer = reader.int32();
                    break;
                case 3:
                    message.bad_consumers = reader.array(message.bad_consumers, () => reader.int32(), tag);
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    }

    static decodeText(reader) {
        const message = new $root.third_party.tensorflow.python.keras.protobuf.VersionDef();
        reader.start();
        while (!reader.end()) {
            const tag = reader.tag();
            switch (tag) {
                case "producer":
                    message.producer = reader.int32();
                    break;
                case "min_consumer":
                    message.min_consumer = reader.int32();
                    break;
                case "bad_consumers":
                    reader.array(message.bad_consumers, () => reader.int32());
                    break;
                default:
                    reader.field(tag, message);
                    break;
            }
        }
        return message;
    }
};

$root.third_party.tensorflow.python.keras.protobuf.VersionDef.prototype.producer = 0;
$root.third_party.tensorflow.python.keras.protobuf.VersionDef.prototype.min_consumer = 0;
