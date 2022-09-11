context_paragraph="""
Tardigrades known colloquially as water bears or moss piglets are a phylum of eight-legged segmented micro-animals. They were first described by the German zoologist Johann August Ephraim Goeze in 1773, who called them Kleiner Wasserbär ("little water bear"). In 1777, the Italian biologist Lazzaro Spallanzani named them Tardigrada, which means "slow steppers".
They have been found in diverse regions of Earth's biosphere - mountaintops, the deep sea, tropical rainforests, and the Antarctic. Tardigrades are among the most resilient animals known, with individual species able to survive extreme conditions - such as exposure to extreme temperatures, extreme pressures (both high and low), air deprivation, radiation, dehydration, and starvation - that would quickly kill most other known forms of life. Tardigrades have survived exposure to outer space There are about 1,300 known species in the phylum Tardigrada, a part of the superphylum Ecdysozoa consisting of animals that grow by ecdysis such as arthropods and nematodes. The earliest known true members of the group are known from Cretaceous (145 to 66 million years ago) amber, found in North America, but are essentially modern forms, and therefore likely have a significantly earlier origin, as they diverged from their closest relatives in the Cambrian, over 500 million years ago.
"""
result = String[]
foreach(word -> push!(result, string(findfirst(word, context_paragraph))), ARGS)
print(result)