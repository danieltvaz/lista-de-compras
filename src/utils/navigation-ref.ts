import { NavigateFunction } from "react-router";
import { useRef } from "react";

const navigateRef = useRef<NavigateFunction | null>(null);

export default navigateRef;
