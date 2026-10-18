import { FieldProps, ObjectInputMember, ObjectInputProps } from "sanity";

export function IngredientsField(props: FieldProps) {
  return (
    <div>
      <div role="row" className="grid grid-cols-[1fr_1fr_4fr] px-2 pb-2">
        <span className="text-xs">Mængde</span>
        <span className="text-xs">Enhed</span>
        <span className="text-xs">Ingrediens</span>
      </div>
      {props.children}
    </div>
  );
}

export function IngredientsInput(props: ObjectInputProps) {
  const { members } = props;

  const amount = members.find(
    (member) => member.kind === "field" && member.name === "amount",
  );

  const unit = members.find(
    (member) => member.kind === "field" && member.name === "unit",
  );

  const name = members.find(
    (member) => member.kind === "field" && member.name === "name",
  );

  if (!amount || !unit || !name) {
    return props.renderDefault(props);
  }

  const renderProps = {
    renderField: props.renderField,
    renderInput: props.renderInput,
    renderItem: props.renderItem,
    renderPreview: props.renderPreview,
  };

  return (
    <div className="grid grid-cols-[1fr_1fr_4fr] gap-2 px-2 py-1">
      <div className="min-w-0">
        <ObjectInputMember member={amount} {...renderProps} />
      </div>

      <div className="min-w-0">
        <ObjectInputMember member={unit} {...renderProps} />
      </div>

      <div className="min-w-0">
        <ObjectInputMember member={name} {...renderProps} />
      </div>
    </div>
  );
}
