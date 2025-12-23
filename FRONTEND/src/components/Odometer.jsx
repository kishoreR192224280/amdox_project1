export default function Odometer({ value }) {
  const formatted = new Intl.NumberFormat("en-IN").format(value);
  const chars = formatted.split("");

  return (
    <span className="odometer font-mono text-teal-600 text-2xl">
      {chars.map((char, i) => {
        
        if (char === ",")
          return <span key={i} className="px-0.5">,</span>; // visible comma

        const digit = Number(char);

        return (
          <span key={i} className="digit-column">
            <span
              className="digit-stack"
              style={{ transform: `translateY(-${digit * 2}rem)` }} // 👈 match CSS height
            >
              {[0,1,2,3,4,5,6,7,8,9].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </span>
          </span>
        );
      })}
    </span>
  );
}
