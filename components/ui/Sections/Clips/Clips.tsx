import Grid from "components/ui/Grid";

import style from "./style.module.css";
import cliplist from "./clips.json";
import ClipCard from "./Card";

export default function Clips() {
  return (
    <Grid.Col>
      {cliplist.map((item) => (
        <Grid.Span key={item.id} span="col-span-2">
          <ClipCard {...item} />
        </Grid.Span>
      ))}
    </Grid.Col>
  );
}
