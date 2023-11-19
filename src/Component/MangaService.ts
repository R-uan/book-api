import { Manga } from "src/Datatypes/_Manga";
import MangaModel from "./MangaModel";

export default abstract class MangaRepository {
    public static getAll() {
        return MangaModel.find();
    }

    public static findByTitle(title: string) {
        return MangaModel.find({ "info.title": new RegExp(`${title}`, "i") });
    }

    public static findByAuthor(author: string) {
        return MangaModel.find({ "info.author": new RegExp(`${author}`, "i") });
    }

    public static saveManga(manga: { info: {}; link: {}; stats: {} }) {
        return MangaModel.create(manga);
    }

    public static deleteManga(id: string) {
        return MangaModel.deleteOne({ _id: id });
    }

    public static updateManga(id: string, data: any) {
        return MangaModel.findOneAndUpdate({ _id: id }, data);
    }
}
