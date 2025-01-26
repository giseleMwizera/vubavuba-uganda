async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const center = { lat: 0.147596, lng: 32.58252 };
  const map = new Map(document.getElementById("map"), {
    zoom: 7,
    center,
    mapId: "4504f8b37365c3d0",
  });

  for (const property of properties) {
    const AdvancedMarkerElement = new google.maps.marker.AdvancedMarkerElement({
      map,
      content: buildContent(property),
      position: property.position,
      title: property.description,
    });

    AdvancedMarkerElement.addListener("click", () => {
      toggleHighlight(AdvancedMarkerElement, property);
    });
  }
}

function toggleHighlight(markerView, property) {
  if (markerView.content.classList.contains("highlight")) {
    markerView.content.classList.remove("highlight");
    markerView.zIndex = null;
  } else {
    markerView.content.classList.add("highlight");
    markerView.zIndex = 1;
  }
}

function buildContent(property) {
  const content = document.createElement("div");

  content.classList.add("property");
  content.innerHTML = `
    <div class="icon">
        <i aria-hidden="true" class="fa fa-icon fa-${property.type}" title="${property.type}"></i>
        <span class="fa-sr-only">${property.type}</span>
    </div>
    <div class="details">
        <div class="price">${property.price}</div>
        <div class="address">${property.address}</div>
        <div class="features">
        <div>
            <i aria-hidden="true" class="fa fa-bed fa-lg bed" title="bedroom"></i>
            <span class="fa-sr-only">bedroom</span>
            <span>${property.bed}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-bath fa-lg bath" title="bathroom"></i>
            <span class="fa-sr-only">bathroom</span>
            <span>${property.bath}</span>
        </div>
        <div>
            <i aria-hidden="true" class="fa fa-ruler fa-lg size" title="size"></i>
            <span class="fa-sr-only">size</span>
            <span>${property.size} ft<sup>2</sup></span>
        </div>
        </div>
    </div>
    `;
  return content;
}

const properties = [
  {
    address: "Plot 10, Kampala Road, Kampala, Uganda",
    description: "Fine dining restaurant with a view of the city",
    price: "UGX 200,000 per meal",
    type: "building",
    bed: 4,
    bath: 3,
    size: 200,
    position: {
      lat: 0.31628,
      lng: 32.58219,
    },
  },
  {
    address: "100 Chris St, Portola Valley, CA",
    description: "Spacious warehouse great for small business",
    price: "$ 3,125,000",
    type: "warehouse",
    bed: 4,
    bath: 4,
    size: 800,
    position: {
      lat: 0.43391,
      lng: 33.20263,
    },
  },
  {
    address: "Nile Avenue, Jinja, Uganda",
    description: "Cozy riverside restaurant offering local dishes",
    price: "UGX 80,000 per meal",
    type: "store-alt",
    bed: 2,
    bath: 1,
    size: 210,
    position: {
      lat: 0.04472,
      lng: 32.46371,
    },
  },
  {
    address: "Plot 12, Gulu Main Street, Gulu, Uganda",
    description: "Authentic African cuisine in a family-friendly atmosphere",
    price: "UGX 50,000 per meal",
    type: "home",
    bed: 4,
    bath: 3,
    size: 200,
    position: {
      lat: -1.24269,
      lng: 29.98558,
    },
  },
  {
    address: "Fort Portal Main Road, Fort Portal, Uganda",
    description: "Restaurant specializing in coffee and pastries",
    price: "UGX 30,000 per meal",
    type: "home",
    bed: 5,
    bath: 4,
    size: 700,
    position: {
      lat: 0.66134,
      lng: 30.27584,
    },
  },
  {
    address: "Mbarara Highway, Mbarara, Uganda",
    description: "Local grill with traditional barbecue dishes",
    price: "UGX 70,000 per meal",
    type: "building",
    bed: 4,
    bath: 4,
    size: 600,
    position: {
      lat: -0.60787,
      lng: 30.65381,
    },
  },
  {
    address: "Plot 3, Mbale Street, Mbale, Uganda",
    description: "Vibrant restaurant with fusion cuisine",
    price: "UGX 90,000 per meal",
    type: "home",
    bed: 3,
    bath: 2,
    size: 100,
    position: {
      lat: 1.07261,
      lng: 34.17503,
    },
  },
];

initMap();
