function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10 text-center">
      <p className="mb-3 text-sm uppercase tracking-[0.2em] text-indigo-300">{subtitle}</p>
      <h2 className="text-3xl font-bold text-white md:text-4xl">{title}</h2>
    </div>
  )
}

export default SectionHeading
