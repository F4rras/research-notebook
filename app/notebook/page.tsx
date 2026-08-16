import { notes } from "../../.velite";
import NotebookClient from "./NotebookClient";

export default function NotebookPage() {
    return <NotebookClient notes={notes} />;
}